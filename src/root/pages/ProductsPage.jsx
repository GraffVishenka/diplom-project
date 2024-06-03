import React, { useState } from 'react'
import { Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel"
import ProductsListForm from "../../components/ProductsListForm"
import ProductsListAPI from "../../components/ProductsListAPI"

const ProductsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className='products-page__container'>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginTop: "40px" }}
      >
        Products Page
      </Typography>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Form List" />
        <Tab label="API List" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <ProductsListForm />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <ProductsListAPI />
      </TabPanel>
    </div>
  );
}


export default ProductsPage