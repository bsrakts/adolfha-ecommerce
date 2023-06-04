
# Adolfha & Co. E-commerce Project

Welcome to Adolfha & Co., an e-commerce project built with ReactJS, leveraging various technologies and libraries such as Context API, Material-UI, CurrencyFormatter, Axios, and React Router DOM. This project interacts with the FakeStoreAPI, making requests to different endpoints to fetch product data. Adolfha & Co. provides a user-friendly interface for browsing, filtering, and purchasing products, while also offering a responsive design that adapts to different screen sizes.



## Table of Contents

- Introduction
- Features
- Installation
- Usage
- Folder Structure
- Dependencies
- Contributing
- License
## Introduction
Adolfha & Co. is an e-commerce project that allows users to explore and purchase a wide range of products.

The project is built using ReactJS and employs state management through Context API. Material-UI is used for a polished and consistent UI design, while CurrencyFormatter ensures proper formatting of prices.

Axios is utilized to make HTTP requests to the FakeStoreAPI, which serves as the data source for this project. React Router DOM enables smooth navigation between different pages and components.
## Features

### Product List Page
The home page serves as the entry point to the application and displays a list of all available products. The page includes a dropdown filtering menu that allows users to filter products by category.
### Product Detail Page
Clicking on the "Discover Now" button on any product card redirects users to the product detail page. Here, users can view detailed information about the selected product. Additionally, a "Add to Basket" button is available to add the product to the user's shopping basket.
### Shopping Basket
The shopping basket can be accessed by clicking on the basket icon in the navigation bar. This page displays a list of selected products in the basket. Each product card includes "Remove" and "Add" buttons, allowing users to decrease or increase the quantity of a particular item. The changes in quantity are reflected in the count displayed on the basket icon in the navigation bar.
### Order Summary
Alongside the product listing in the basket page, an order summary card is provided. This card displays the names, category icons, and counts of the products in the basket. The prices of each item are multiplied by their respective counts to show the total price for each product. At the bottom, the total price of all products in the basket is calculated and displayed.
### Responsive Design
The Adolfha & Co. project is fully responsive and compatible with different screen sizes. The user interface adjusts seamlessly to provide an optimal experience on desktop, tablet, and mobile devices.




## Installation

To run the Adolfha & Co. project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/bsrakts/adolfha-ecommerce.git
```


2. Change to the project directory:

```bash
cd adolfha-ecommerce
``` 

3. Install the dependencies:

```bash
npm install
``` 

4. To start the development server and run the project, execute the following command:

```bash
npm start
``` 

This will start the application on your local machine, and you can access it in your web browser at http://localhost:3000.




    
## Dependencies

The Adolfha & Co. e-commerce project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
   ##### (https://react.dev/)
- React Router DOM: A library for routing in React applications. 
   ##### (https://reactrouter.com/en/main)
- Material-UI: A popular UI component library for React applications. 
  ##### (https://mui.com/)
- Axios: A promise-based HTTP client for making API requests.
  ##### (https://axios-http.com/docs/intro)
- CurrencyFormatter: A library for formatting currencies.
  ##### (https://www.npmjs.com/package/react-currency-format)
- FakeStoreAPI: A mock API used to fetch product data.
  ##### (https://fakestoreapi.com/docs)
Please refer to the package.json file in the project repository for the specific versions of these dependencies.
## Contributing

Contributions to the Adolfha & Co. project are welcome! If you find any issues or have suggestions for improvements, please open an issue on the project's GitHub repository:
##### (https://github.com/bsrakts/adolfha-ecommerce)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dbusraktas/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/dbusraktas)


## License

[MIT](https://choosealicense.com/licenses/mit/)


