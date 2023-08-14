import React, { useEffect, useState } from 'react'
import {Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    TextField,
    AppBar,
    Toolbar,
    IconButton,
    FormControl,
    Select,
    MenuItem,} from '@mui/material'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function Products() {
const [data, setData] = useState('')
const [searchItem, setSearch] = useState('')
const [sortOrder, setSortOrder] = useState('asc');
const getProducts = async () =>{
    try{const response = await fetch('https://fakestoreapi.com/products/')
    const products = await response.json()
    console.log(products)
    setData(products)}
    catch(error){
        console.log("Error", error)
    }
}
useEffect(() =>{
    getProducts()
},[])
const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  }

  return (
    <div container>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fake Store
        </Typography>
        <TextField
          id="search"
          variant="outlined"
          size="small"
          
          onChange={(event) => setSearch(event.target.value)}
          type='text'
        />
        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <FormControl sx={{ m: 1 }}>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Sort Order' }}
        >
          <MenuItem value="asc">Sort by Price (Low to High)</MenuItem>
          <MenuItem value="desc">Sort by Price (High to Low)</MenuItem>
        </Select>
      </FormControl>
        {/* <div>
            <TextField label='search...' type = "text" onChange={(event) => setSearch(event.target.value)}/>
        </div> */}
        {data ? <>
        <Grid container spacing={2}>
        {data.filter((val) =>{
            if(searchItem =="") return val
            else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
                return val
            }
        }
        ).sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price))
        .map((d) =>{
            return(
                    <Grid item xs={12} sm={6} md={4} key={d.id}>
                        <Card 
                        key={d.id} 
                        sx={{ display: 'flex',
                         flexDirection: 'column', 
                         justifyContent: 'space-between', 
                         height: '100%' }}
                        >
                        
                        <CardMedia
                        component="img"
                             sx={{ maxHeight: 200, objectFit: 'contain' }}
                            image={d.image}
                        />
                        
                        <Typography gutterBottom variant="h6" component="div">
                        {d.title}
                        </Typography>
                        <Typography variant="body2" >
                            Price {d.price}
                        </Typography>
                        <Button component={Link}  to ="/Review" state={{ product: d }} variant='contained'>Buy</Button>
                        </Card>
                    </Grid>
            )
        })}
    </Grid>   
        </> :
        <>
        Loading
        </>
        }
         
    </div>
  )
}

export default Products