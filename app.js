App(firebaseConfig);
        const db = getFirestore(app);
async function sendMessage(userName, messageText) {

    try {

      // addDoc автоматически создает документ с уникальным ID в коллекции "messages"

      

      });

      

      console.log("Сообщение отправлено! Автоматический ID:", docRef.id);

    } catch (error) {

      console.error("Ошибка при отправке сообщения: ", error);

    }

  }


        async functDatabaseConnection() {
            const statusDment.getElementById("status");
            try {
                const testDocRef = doc(db, "connectionTest", "statusDoc");
                await sDocRef, { 
                    message: "Со установлено!", 
                    checkedAt: new Date().toISOString() 
                });

                // Читаем документ обратно для подтверждения связи
                const docSnap = await getDoc(testDocRef);

                if (docSnap.exists()) {
                    statusDых ответила: "${docSnap.data().message}"`;
                    statusDiv.style.color = "green";
                } else {
                    statusDiv.innerText е найден в базе данных.";
                    statusDiv.style.color = "orange";
                }
            } catch (error) {
                statusDiv.innerText = `Ошибка подключениrror.message}`;
                statusDiv.style.color .error(error);
            }
        }

        testDatabaseConnection();
