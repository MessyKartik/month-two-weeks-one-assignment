# 📧 Pipedream Workflow – Webhook Trigger to Gmail API Email Automation

## 🧩 Overview
This project demonstrates how to create a Pipedream workflow that automatically sends an email through the Gmail API whenever a webhook receives a POST request. It shows how to connect APIs and automate actions using a no-code approach.

## 🎯 Objective
To create a Pipedream workflow that triggers when a webhook is called and automatically sends an email via Gmail API.

## ⚙️ Step-by-Step Process

### 1️⃣ Create a Workflow in Pipedream
1. Go to https://pipedream.com  
2. Click **“New Workflow.”**  
3. Choose **HTTP / Webhook** as the trigger.  
4. Pipedream automatically generates a unique webhook URL, https://eo681iyqod9s0zc.m.pipedream.net

This URL acts as workflow endpoint — where incoming HTTP POST requests will be received.

### 2️⃣ Test the Webhook (Trigger)
1. Open **Postman**.  
2. Create a new **POST** request to webhook URL.  


Once sent, in Pipedream → under Live Events, see a new POST / event appear. This confirms that webhook successfully received the data. 

And in last when receiving the POST request, Pipedream automatically extracts the event data (subject and text) from the JSON body and uses the Gmail API step to send an email dynamically through connected Gmail account.



