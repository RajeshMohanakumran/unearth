# Use official Node.js image as base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /frontend

# Copy the frontend source code to the working directory
COPY . .

# Install dependencies
RUN npm install

EXPOSE 3000 

# Command to run the frontend server
CMD ["npm", "start"]
