#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <ArduinoJson.h>
#include <FS.h> // nu sterge, a dat o eroare la un moment dat
#include <HardwareSerial.h>
#include <SPIFFS.h>




//const char* ssid = "DIGI-3brj";
//const char* password = "AFEHT6a4";
//const char* ssid = "DIGI-5-c79C";
//const char* password = "BjYjv6q9";

const char* ssid = "hotspot";
const char* password = "unudoitreipatru";

//const char* ssid = "Tp Link!";
//const char* password = "camera100110111!";

//const char* ssid = "linksys";
//const char* password = "ducuducu";

//const char* ssid = "D101";
//const char* password = "burkus200556";

const int ledPin = 2;

const int rxPin = 16; // pins pt Serial2
const int txPin = 17;
HardwareSerial ESP32Serial(2);


AsyncWebServer server(80);
AsyncWebSocket ws("/ws");



void onEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg, uint8_t *data, size_t len) {
  if (type == WS_EVT_CONNECT) {
    Serial.println("WebSocket client connectat");
    
  } else if (type == WS_EVT_DISCONNECT) {
    Serial.println("WebSocket client deconectat");
  }
}

void listAllFiles() {
  File root = SPIFFS.open("/");
  if (!root) {
    Serial.println("Failed to open directory");
    return;
  }
  if (!root.isDirectory()) {
    Serial.println("Not a directory");
    return;
  }

  File file = root.openNextFile();
  while (file) {
    if (file.isDirectory()) {
      Serial.print("DIR : ");
      Serial.println(file.name());
    } else {
      Serial.print("FILE: ");
      Serial.print(file.name());
      Serial.print("\tSIZE: ");
      Serial.println(file.size());
    }
    file = root.openNextFile();
  }
}


void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  // dsp serial, modifica pt serial 1/0, 0 cred ca e de doar test
  ESP32Serial.begin(115200, SERIAL_8N1, rxPin, txPin); // Start UART with 115200 baud rate
  //ESP32Serial.begin(115200, SERIAL_8E1); //  8 data bits, Even parity, 1 stop bit
  //ESP32Serial.begin(115200, SERIAL_8E2); //  8 data bits Even parity, 2 stop bits
  //SERIAL_8O pt even parity1
 

  Serial.println("ESP32 UART JSON Receiver");

  SPIFFS.begin();

  if (!SPIFFS.begin(true))
  {
    Serial.println("A apărut o eroare la montarea SPIFFS-urilor");
    return;
    }
    listAllFiles();

    // Routa pentru root-ul / web page
    server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/index.html", "text/html");
    });

    // Ruta pentru a incarca fisierul style.css file
    server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/style.css", "text/css");
    });

    // Ruta pentru a incarca fisierul app.js file
    server.on("/app.js", HTTP_GET, [](AsyncWebServerRequest *request){
        request->send(SPIFFS, "/app.js", "text/javascript");
    });
  

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectare la WiFi...");
  }
  if (WiFi.status() == WL_CONNECTED){
    Serial.println("Conectat la WiFi!");
    delay(1000);
    Serial.print("Adresa Ip: ");
    Serial.println(WiFi.localIP()); }
    else
    Serial.println("Esuat in a se conecta");
    
     
  //scanNetworks();
   
  ws.onEvent(onEvent);
  server.addHandler(&ws); //atasare 'ws' la server folosind addHandler- asculta pentru conexiuni Websocket
  

  server.begin();

}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    digitalWrite(ledPin, HIGH); 
    delay(500);                
    digitalWrite(ledPin, LOW);  
    delay(500); 
    Serial.print("Adresa Ip: ");
    Serial.println(WiFi.localIP());
  }

static String jsonData; // Hold the incoming JSON data
while (ESP32Serial.available()) {
  char c = ESP32Serial.read(); // Read incoming characters
  if (c == '\n') { // Assuming each JSON message ends with a newline
    // Check if the received string contains "ID"
    if (jsonData.indexOf("\"ID\"") != -1) {
      // Parse JSON data doar daca contine "ID"
      StaticJsonDocument<2000> doc; 
      DeserializationError error = deserializeJson(doc, jsonData);
      if (!error) {
        // Successfully parsed JSON data
        Serial.println("Json primit:");
        serializeJsonPretty(doc, Serial); // Print JSON data pentru debugging

        // Example: extract the "ID" field
        const char* ID = doc["ID"];
        Serial.print("ID: ");
        Serial.println(ID);

        long CTR = doc["CTR"]; // Assuming "CTR" is a long integer
        Serial.print("CTR: ");
        Serial.println(CTR);

        // Here you can add additional data extraction as needed
        
        // Serialize JSON and send it to all connected WebSocket clients
        String output;
        serializeJson(doc, output);
        ws.textAll(output);
      } else {
        // If there was an error in parsing JSON
        Serial.print("deserializeJson() failed: ");
        Serial.println(error.c_str());
      }
    } else {
      Serial.println("JSON nu contine 'ID'. Ignora.");
    }
    jsonData = ""; // Clear jsonData for the next message
  } else {
    jsonData += c; // Accumulate the characters into a String
  }
}
}

/*
static String jsonData; // Hold the incoming JSON data
while (ESP32Serial.available()) {
  char c = ESP32Serial.read(); // Read incoming characters
  if (c == '\n') { // Assuming each JSON message ends with a newline
    // Check if the received string contains "ID"
    if (jsonData.indexOf("\"ID\"") != -1) {
      // Parse JSON data doar daca contine "ID"
      StaticJsonDocument<2000> doc; 
      DeserializationError error = deserializeJson(doc, jsonData);
      if (!error) {
        // Successfully parsed JSON data
        Serial.println("Received JSON:");
        serializeJsonPretty(doc, Serial); // Print JSON data pentru debugging

        // Example: extract the "ID" field
        const char* ID = doc["ID"];
        Serial.print("ID: ");
        Serial.println(ID);

        long CTR = doc["CTR"]; // Assuming "CTR" is a long integer
        Serial.print("CTR: ");
        Serial.println(CTR);

        // Here you can add additional data extraction as needed
        
        // Serialize JSON and send it to all connected WebSocket clients
        String output;
        serializeJson(doc, output);
        ws.textAll(output);
      } else {
        // If there was an error in parsing JSON
        Serial.print("deserializeJson() failed: ");
        Serial.println(error.c_str());
      }
    } else {
      Serial.println("JSON does not contain 'ID'. Ignoring.");
    }
    jsonData = ""; // Clear jsonData for the next message
  } else {
    jsonData += c; // Accumulate the characters into a String
  }
}
*/

/*
 static String jsonData; // string pt data json
  while (ESP32Serial.available()) {
    char c = ESP32Serial.read(); // citire data
    if (c == '\n') { // Asumand ca json se termina cu \n
      // Parse the JSON data
      StaticJsonDocument<2000> doc; // ajusteaza bazat pe marimea json-ului
      DeserializationError error = deserializeJson(doc, jsonData);
      if (!error) {
        // Am parsed json cu succes
        Serial.println("Primit JSON:");
        serializeJsonPretty(doc, Serial); // Print the JSON data for debugging

        // Example: extrag "ID"
        const char* ID = doc["ID"];
        Serial.print("ID: ");
        Serial.println(ID);
        
        long CTR = doc["CTR"]; //
        Serial.print("CTR: ");
        Serial.println(CTR);
    

        //serializez json si trimite-l la toti clientii
        String output;
        serializeJson(doc, output);
        //notifyClients(output);
        ws.textAll(output);
      } else {
        // If error in parsing JSON
        Serial.print("deserializeJson() failed: ");
        Serial.println(error.c_str());
      }
      jsonData = ""; //  golesc jsonData pt urmatorul mesaj
    } else {
      jsonData += c; // acumularea caracterelor intr-un string
    }
}    */


/*
void scanNetworks() {
  Serial.println("Scanarea pentru rețele WiFi din apropiere...");
  int n = WiFi.scanNetworks();
  if (n == 0) {
    Serial.println("Nici o retea WiFi gasita");
  } else {
    Serial.print(n);
    Serial.println(" retele WiFi gasite:");
    for (int i = 0; i < n; ++i) {
      // Print SSID si RSSI pt fiecare gasit
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(" dBm)");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" (Open)":" (Secured)");
      delay(10);
    }
  }
  Serial.println("Scanare completa.");
}
*/