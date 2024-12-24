import "./Help.css";
import "../Cursor.css";
import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import StarIcon from '@mui/icons-material/Star';

const introMsg = "🍿 Ratings are purely subjective, based on how I perceived each film. In fact,\
they say more about myself than each rated film. Having the same rating \
doesn't suggest two movies are of equal standing. In addition, this list excludes \
blockbuster action movies which I tend to appreciate. I have watched a lot of movies and most are \
not on this list. If it's on the list it means I've thought about it or enjoyed the film \
enough in order to add it (or that I plan to watch it in the future)."

const SimpleModal = (props) => {
  const notes = props.notes
  const director = props.director
  const poster = props.poster
  const title = props.title
  const imdbLink = props.imdbLink
  const year = props.year
  const rating = props.rating

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}

    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        maxWidth: "600px",
        minHeight: "200px",
        bgcolor: '#21201e',
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
      }} >

        <Box sx={{ justifyItems: "center", display: "grid" }}>
          <img className="card-image-modal" src={poster} loading="lazy" />
        </Box>

        <>
          <br />

          <div className="card-notes"> {title + ' (' + year + ') | ' + director}</div>
          <br />
          {(rating === null ?
            <div className="card-rating-not-watched">{"Not yet watched"}</div>
            :
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating
                size="small" name="read-only"
                sx={{ color: "rgb(231, 174, 60)", paddingRight: 1, fontSize: 12 }}
                value={rating}
                readOnly
                precision={0.05}
                emptyIcon={<StarIcon style={{ opacity: 0.95 }} fontSize="inherit" />}
              />
              <div className="card-rating">{rating + " / 5"}</div>

            </Box>
          )}

          <br />
          <div className="card-notes"> Notes: {notes}</div>
          <br />
          <div className="card-notes">
            IMDB: <a className="card-main-title" href={imdbLink}>{imdbLink}</a>
          </div>

        </>
      </Box>
    </Modal>
  )
}
const SimpleGridItem = (props) => {
  const notes = props.data['Notes']
  const director = props.data['Director']
  const poster = props.data['Poster']
  const title = props.data['Film']
  const rating10 = props.data['Rating 5-10']
  const imdbLink = props.data['IMDB Link']
  const year = props.data['Year']
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{
        minHeight: "15rem",
        maxHeight: "15rem",
        backgroundColor: "rgba(52, 51, 50, 0.37)",
        justifyItems: "center",
        display: "grid"
      }}>
        <Button size="small" onClick={handleOpen} sx={{ paddingTop: '10%', paddingX: '10%' }}>
          <img className="card-image" src={poster} loading="lazy" />
        </Button>
        <CardContent>
          <div className="card-main-title">{title + ' (' + year + ')'}</div>
          <div className="card-subtitle">{director}</div>
          {(rating10 === null ?
            <div className="card-rating-not-watched">{"Not yet watched"}</div>
            :
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating
                size="small" name="read-only"
                sx={{ color: "rgb(231, 174, 60)", paddingRight: 1, fontSize: 12 }}
                value={rating10 / 2}
                readOnly
                precision={0.05}
                emptyIcon={<StarIcon style={{ opacity: 0.95 }} fontSize="inherit" />}
              />
            </Box>
          )}
        </CardContent>
      </Card>
      <SimpleModal open={open} notes={notes} director={director} poster={poster} rating={rating10 / 2.0}
        title={title} imdbLink={imdbLink} year={year} handleClose={handleClose} />



    </div>
  );
}

const BasicGrid = () => {
  const films = require('../../assets/films/films.json')
  const filmsContent = Object.values(films)
  const watchedFilms = filmsContent.filter((data) => data['Rating 5-10'] !== null);
  const notWatchedYet = filmsContent.filter((data) => data['Rating 5-10'] === null);
  console.log(watchedFilms.length, 'length')

  const [page, setPage] = useState(1); // Current page
  const handleChange = (event, value) => {
    setPage(value); // Update page state when user clicks on pagination buttons
  };

  // Calculate the indices of items to be displayed on the current page
  const itemsPerPage = 12
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = filmsContent.slice(startIndex, endIndex);

  return (
    <>
      <div>{introMsg}</div>
      <br/>
      <div>{'Total watched: ' + watchedFilms.length + ' | Not yet watched: ' + notWatchedYet.length + ' | Estimated time: ' + Math.round(notWatchedYet.length/12) + ' years'}</div>
      <Box sx={{ flexGrow: 1, marginTop: "2%" }}>
        <Grid container spacing={3}>
          {visibleItems.map((film) => (
            <Grid size={{ xs: 4, sm: 3, md: 2, lg: 2 }} sx={{ paddingRight: "1%" }}>
              <SimpleGridItem data={film} />
            </Grid>
          ))}

        </Grid>

        {/* Pagination Component */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Pagination
            count={Math.ceil(filmsContent.length / itemsPerPage)} // Total pages
            page={page} // Current page
            onChange={handleChange} // Handle page change
            size="small"
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#fff', // Change color of the pagination item text
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0)', // light grey hover effect
                },
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: 'rgb(19, 169, 255)', // Change background color of selected page
                color: '#000', // Text color of selected page
                '&:hover': {
                  backgroundColor: 'rgb(19, 169, 255)', // Background when selected AND hovered
                },
              },
              
              '& .MuiPaginationItem-root:hover': {
                backgroundColor: 'rgb(231, 175, 62)', // Background color when hovering over the page item
                color: '#000', // Text color when hovering over the page item

              },
              '& .MuiPaginationItem-root.MuiPaginationItem-ellipsis': {
                backgroundColor: 'transparent', // No background color for ellipsis
                color: '#fff', // Text color for ellipsis (like '...') items
              }
            }}
          />
        </Box>
      </Box>
    </>
  )
}


const ComFilms = (props) => {
  return (
    <div>
      <br></br>
      <div className="command-valid">user@home ~ % films</div>
      <BasicGrid />
    </div>
  );
};

export default ComFilms;
