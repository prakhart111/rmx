import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const Gallery = () => {
    const images = [
        {
          original: 'https://images2.imgbox.com/af/f6/FpUICC53_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/af/f6/FpUICC53_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/63/c3/hG9G48aV_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/63/c3/hG9G48aV_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/a6/48/Xy6lClZR_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/a6/48/Xy6lClZR_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/b4/e6/kLgJn1LB_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/b4/e6/kLgJn1LB_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/93/9c/OZIHLCkb_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/93/9c/OZIHLCkb_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/7f/fe/PWlPGEBE_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/7f/fe/PWlPGEBE_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/cb/4b/SWvzOVac_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/cb/4b/SWvzOVac_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/a7/47/BLGQtYwB_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/a7/47/BLGQtYwB_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/8b/b9/TA3pKYzM_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/8b/b9/TA3pKYzM_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/6b/e2/EBWffkst_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/6b/e2/EBWffkst_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/f7/42/fEumDluM_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/f7/42/fEumDluM_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/71/aa/mLpdD7Sn_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/71/aa/mLpdD7Sn_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/cc/7b/9JIB4RC0_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/cc/7b/9JIB4RC0_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/90/ba/EycNHo9a_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/90/ba/EycNHo9a_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/f4/0c/fOOYx44M_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/f4/0c/fOOYx44M_t.jpeg',
        },
        {
          original: 'https://images2.imgbox.com/2d/17/gZlN3kjA_o.jpeg',
          thumbnail: 'https://thumbs2.imgbox.com/2d/17/gZlN3kjA_t.jpeg',
        },
      ];

  return (
    <ImageGallery items={images} />
  )
}

export default Gallery