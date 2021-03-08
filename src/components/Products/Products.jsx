import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Dell",
    description: "Microsoft Windows",
    price: "$650",
    image:
      "https://images.pexels.com/photos/3769025/pexels-photo-3769025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 2,
    name: "MacBookAir",
    description: "Apple MacBook",
    price: "$1099",
    image:
      "https://images.pexels.com/photos/3769025/pexels-photo-3769025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
