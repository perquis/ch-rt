### Completed Task Summary

**Docker Integration**:  
The backend was containerized using Docker to simplify deployment. The project was structured into two main directories: `be` (backend) and `fe` (frontend). The following steps were followed to set up and run the project:

### Installation Instructions:

1. **Yarn Workspaces Setup**:  
   At the root directory of the project, run the command:

   ```bash
   yarn
   ```

   This initializes `yarn workspaces` for the project.

2. **Starting the Frontend**:  
   To launch the frontend service, execute:
   ```bash
   yarn dev:fe
   ```
3. **Starting the Backend**:  
   Similarly, for the backend service, run:

   ```bash
   yarn dev:be
   ```

4. **Accessing the Application**:  
   Once both services are running, open your browser and navigate to:
   ```
   http://localhost:5173
   ```

With this setup, the backend communicates with the frontend, and real product data replaces the mock data previously used in the frontend.

This structure ensures both the frontend and backend can be run and tested together for seamless integration.
