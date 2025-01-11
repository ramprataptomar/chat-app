
// console.log("cloudinary imports");
// import { v2 as cloudinary } from 'cloudinary'
// // require("dotenv").config();

// // Initialize Cloudinary

// console.log("cloudinary initialization");

// cloudinary.config({
//   cloud_name: dag3btekj, //process.env.CLOUDINARY_NAME,
//   api_key: 785952594692895, //process.env.CLOUDINARY_API_KEY,
//   api_secret: OxbwE-GKLHzMwdYrRoHjqze9xRs, //process.env.CLOUDINARY_API_SECRET,
// });


// console.log("cloudinary upload");
// export const uploadToCloudinary = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "ml_default");
  
//     const response = await fetch(
//       'cloudinary://785952594692895:OxbwE-GKLHzMwdYrRoHjqze9xRs@dag3btekj',
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
  
//     const data = await response.json();
//     return data.secure_url; // URL of the uploaded file
//   };
  

// // // Function to upload image to Cloudinary

// // exports.uploadImage = async (file) => {
// //   try {
// //     const result = await cloudinary.v2.uploader.upload(file, {
// //       folder: 'Chat-App-User-PP',
// //     });
// //     return result.secure_url;
// //   } catch (error) {
// //     console.error('Error uploading image to Cloudinary:', error);
// //     throw error;
// //   }
// // };  

// export default uploadImage;
// // // Function to delete image from Cloudinary

// // exports.deleteImage = async (publicId) => {
// //   try {
// //     await cloudinary.v2.uploader.destroy(publicId);
// //   } catch (error) {
// //     console.error('Error deleting image from Cloudinary:', error);
// //     throw error;
// //   }
// // };

// // // Function to resize image to 200x200

// // exports.resizeImage = async (publicId) => {
// //   try {
// //     const result = await cloudinary.v2.image(publicId, {
// //       width: 200,
// //       height: 200,
// //       crop: 'fill',
// //     });
// //     return result.secure_url;
// //   } catch (error) {
// //     console.error('Error resizing image:', error);
// //     throw error;
// //   }
// // };

// // // Function to convert image to base64

// // exports.convertToBase64 = async (publicId) => {
// //   try {
// //     const result = await cloudinary.v2.image(publicId, { format: 'raw' });
// //     const buffer = Buffer.from(result.body, 'binary');
// //     const base64 = buffer.toString('base64');
// //     return `data:${result.mimeType};base64,${base64}`;
// //   } catch (error) {
// //     console.error('Error converting image to base64:', error);
// //     throw error;
// //   }
// // };

// // // Function to fetch image from Cloudinary

// // exports.fetchImage = async (publicId) => {
// //   try { 
// //     const result = await cloudinary.v2.image(publicId);
// //     return result.secure_url;
// //   } catch (error) {
// //     console.error('Error fetching image from Cloudinary:', error);
// //     throw error;
// //   }
// // };

// // // Example usage:

// // // const file = 'path/to/your/image.jpg';

// // // (async () => {
// //     // Upload image to Cloudinary
// //     // const imageUrl = await uploadImage(file);
// //     // console.log('Image uploaded:', imageUrl);

// //     // Delete image from Cloudinary
// //     // await deleteImage('your_public_id');
// //     // console.log('Image deleted');

// //     // Resize image to 200x200
// //     // const resizedImageUrl = await resizeImage('your_public_id');
// //     // console.log('Image resized:', resizedImageUrl);

// //     // Convert image to base64
// //     // const base64Image = await convertToBase64('your_public_id');
// //     // console.log('Image converted to base64:', base64Image);

// //     // Fetch image from Cloudinary
// //     // const fetchedImageUrl = await fetchImage('your_public_id');
// //     // console.log('Fetched image:', fetchedImageUrl);
// // // })();

// // // Replace 'path/to/your/image.jpg' with the actual path to your image file.

// // // Note: Make sure to replace 'your_public_id' with the actual public ID of the image you want to work with.

// // // Note: This example uses the Cloudinary v2 JavaScript SDK. If you are using a different version or prefer a different programming language, you may need to adjust the code accordingly.

// // // Remember to install the Cloudinary v2 SDK by running 'npm install cloudinary' in your project directory.

// // // Note: This example assumes you have set up the necessary environment variables for Cloudinary (CLOUDINARY_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET). Make sure to replace these variables with your own values in your production environment.

// // // Note: This example assumes that you have a Cloudinary account and have set up a folder called 'chat-app-images' to store your images. If you want to use a different folder or change the folder name, you will need to update the 'folder' option in the Cloudinary configuration.

// // // Note: This example assumes that you have a Cloudinary account and have set up a public ID for your image. If you want to use a different public ID, you will need to update the 'publicId' option in the Cloudinary functions.

