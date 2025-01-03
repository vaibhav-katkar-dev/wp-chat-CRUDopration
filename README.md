
# WP Chats

**WP Chats** is a simple project that simulates a chat application (not like WhatsApp) created to implement CRUD operations using MongoDB. It allows users to create, retrieve, edit, and delete chats seamlessly.

## Features

- **Create Chats:** Add a new chat with fields for `message`, `from`, and `to`. Automatically stores the current date and time.
- **Retrieve Chats:** Displays all stored chats from the MongoDB database on the main page.
- **Edit Chats:** Update the message content of an existing chat.
- **Delete Chats:** Permanently remove a chat.
- **Unlimited Chats:** Users can create and manage as many chats as they want.



---

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, EJS templates
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vaibhav-katkar-dev/wp-chat-CRUDopration.git
   cd wp-chats
   ```

2. **Install Dependencies:**
   ```bash
   npm install ejs express mongoose method-override
   ```

3. **Set Up MongoDB:**
   - Ensure MongoDB is installed and running on your system.
   - Connect to the MongoDB instance using the URI `mongodb://127.0.0.1:27017/whatsapp`.

4. **Run the Application:**
   ```bash
   node app.js
   ```
   The application will be accessible at `http://localhost:8080`.

---

## API Endpoints

### `GET /chats` 
- Displays the main page with all chats.
![All Chats](https://raw.githubusercontent.com/vaibhav-katkar-dev/wp-chat-CRUDopration/refs/heads/main/assets/wp_home.PNG)

### `GET /new`
- Renders the form to create a new chat.
![Create Chat](https://raw.githubusercontent.com/vaibhav-katkar-dev/wp-chat-CRUDopration/refs/heads/main/assets/wp-create.PNG)

### `POST /new`
- Creates a new chat.

### `GET /chats/:id/edit`
- Renders the edit form for a specific chat.
![Edit Chat](https://raw.githubusercontent.com/vaibhav-katkar-dev/wp-chat-CRUDopration/refs/heads/main/assets/wp-edit.PNG)

### `PUT /chats/:id`
- Updates an existing chat by ID.

### `GET /chats/:id/del`
- Renders a confirmation page for deleting a chat.
![Delete Chat](https://raw.githubusercontent.com/vaibhav-katkar-dev/wp-chat-CRUDopration/refs/heads/main/assets/wp-delete.PNG)

### `DELETE /chats/:id/del`
- Deletes a chat by ID.

---

## Example Routes Usage

### Create a Chat
1. Navigate to `/new` to add a new chat.
2. Enter `message`, `from`, and `to`, then submit. The chat will be saved to the database.

### Retrieve Chats
1. Visit `/chats` to view all stored chats.

### Update a Chat
1. Click the edit button on a chat (redirects to `/chats/:id/edit`).
2. Update the `message` field and save changes.

### Delete a Chat
1. Click the delete button on a chat (redirects to `/chats/:id/del`).
2. Confirm the deletion to remove the chat from the database.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

**Happy Coding!**
