        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
        import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

        // Замените эти данные на конфигурацию вашего проекта AeroChat
          const firebaseConfig = {

    apiKey: "AIzaSyAef4_PHSIW20zAZJxYdjXiZtrHXaqdVEg",

    authDomain: "aerochat-39ba7.firebaseapp.com",

    projectId: "aerochat-39ba7",

    storageBucket: "aerochat-39ba7.firebasestorage.app",

    messagingSenderId: "589904722464",

    appId: "1:589904722464:web:7d3ff87f37c7f65936da45",

    measurementId: "G-1ZG7VD27WK"

  };


        // Инициализация Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
async function sendMessage(userName, messageText) {

    try {

      // addDoc автоматически создает документ с уникальным ID в коллекции "messages"

      const docRef = await addDoc(collection(db, "messages"), {

        name: userName,

        text: messageText,

        timestamp: new Date() // Полезно для сортировки и настройки TTL-удаления

      });

      

      console.log("Сообщение отправлено! Автоматический ID:", docRef.id);

    } catch (error) {

      console.error("Ошибка при отправке сообщения: ", error);

    }

  }


        async function testDatabaseConnection() {
            const statusDiv = document.getElementById("status");
            try {
                // Пытаемся записать тестовый документ
                const testDocRef = doc(db, "connectionTest", "statusDoc");
                await setDoc(testDocRef, { 
                    message: "Соединение успешно установлено!", 
                    checkedAt: new Date().toISOString() 
                });

                // Читаем документ обратно для подтверждения связи
                const docSnap = await getDoc(testDocRef);

                if (docSnap.exists()) {
                    statusDiv.innerText = `Успех! База данных ответила: "${docSnap.data().message}"`;
                    statusDiv.style.color = "green";
                } else {
                    statusDiv.innerText = "Ошибка: Документ не найден в базе данных.";
                    statusDiv.style.color = "orange";
                }
            } catch (error) {
                statusDiv.innerText = `Ошибка подключения: ${error.message}`;
                statusDiv.style.color = "red";
                console.error(error);
            }
        }

        testDatabaseConnection();
