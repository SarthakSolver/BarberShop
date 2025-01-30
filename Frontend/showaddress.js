
        // Define your address
        const address = "Shop No 1, Surajpur, Greater Noida, Uttar Pradesh 201306";

        // Generate a Google Maps URL
        const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

        // Create a clickable link
        const addressLink = document.createElement("a");
        addressLink.href = googleMapsUrl;
        addressLink.target = "_blank"; // Open in a new tab
        addressLink.textContent = address;

        // Append the link to the container
        document.getElementById("address1").appendChild(addressLink);