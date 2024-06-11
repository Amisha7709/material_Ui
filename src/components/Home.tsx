import {
  Autocomplete,
  Avatar,
  Box,
  Chip,
  Grid,
  ImageListItemBar,
  Stack,
  TextField,
  Typography
} from "@mui/material";

export default function Home() {

  const Category = [
    { title: 'Men', img: '/static/images/avatar/1.jpg' },
    { title: 'Women', img: '/static/images/avatar/2.jpg' },
    { title: 'Kid', img: '/static/images/avatar/3.jpg' },
    { title: 'Electronics', img: '/static/images/avatar/4.jpg' },
    { title: 'Jewellry', img: '/static/images/avatar/5.jpg' },
  ]

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast", author: "@bkristastucchio",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger", author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera", author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee", author: "@nolanissac",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats", author: "@hjrc33",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey", author: "@arwinneil",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball", author: "@tjdragotta",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern", author: "@katie_wasserman",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms", author: "@silverdalex",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil", author: "@shelleypauls",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star", author: "@peterlaster",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike", author: "@southside_customs",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike", author: "@southside_customs",
    },
  ];

  const chipData = [
    { label: 'Platinum', color: 'paleturquoise' },
    { label: 'Silver', color: 'silver' },
    { label: 'Gold', color: 'goldenrod' },
    { label: 'Coral', color: 'coral' },
    { label: 'Bronze', color: 'burlywood' },
    { label: 'New Color', color: 'pink' },
  ];

  return (
    <>

      {/* Autocomplete (SearchBar) example  */}
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" mt={7} useFlexGap flexWrap="wrap" alignItems={"center"}>
        <Autocomplete
          id="free-solo-demo" freeSolo sx={{ width: 400, my: 3, mx: 5 }}
          options={Category.map((value) => value.title)}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />

        <Stack direction="row" spacing={2} sx={{ my: 3, mx: 5 }}>
          {Category.map((value, index: number) => (
            <Avatar key={index} alt={value.title} src={value.img} />
          ))}
        </Stack>
      </Stack>


      {/* Responsive grid example */}
      <Box>
        <Grid container spacing={2}>
          {itemData.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <img src={item.img} alt={item.title} style={{ width: "100%" }} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* Chip color example */}
      <Stack>
        {chipData.reverse().map((data) => (
          <Chip
            sx={{ mt: 5 }}
            variant="outlined"
            key={data.label}
            label={data.label}
            style={{ background: data.color }}
          />
        ))}
      </Stack>



      {/* box table example */}

      {
        itemData.map((item, index) => (
          <Box key={index} sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", my: 9, textAlign: "center", justifyContent: 'center' }}>

            <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 3', border: '1px solid black', backgroundColor: 'burlywood' }, borderRight: { md: 'none' } }}>
              <Box>
                <Typography>Hello Amisha</Typography>
              </Box>
            </Box>
            <Box sx={{ gridColumn: { xs: 'span 4', md: 'span 3', border: '1px solid black', borderRight: 'none', backgroundColor: 'burlywood' }, borderLeft: { md: 'none' } }}>{item.title}</Box>
            <Box sx={{ gridColumn: { xs: 'span 4', md: 'span 3', border: '1px solid black', borderLeft: 'none', backgroundColor: 'burlywood' } }}>{item.author}</Box>
          </Box >
        ))
      }


    </>
  )
}
