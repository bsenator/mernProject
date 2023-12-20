import Photo from '../models/photoModel.js';


const createPhoto = async (req, res) => {

  try {
    await Photo.create({
      name: req.body.name,
      description: req.body.description,
      user: res.locals.user._id,
      url: result.secure_url,
      image_id: result.public_id,
    });

    res.status(201).redirect('/users/dashboard');
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};


const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).render('photos', {
      photos,
      link: 'photos',
    });
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error,
    });
  }
};

const getAllPhoto = async (req, res) => {
    try {
      const photo = await Photo.findById({_id : req.params.id});
      res.status(200).render('photo', {
        photo,
        link: 'photos',
      });
    } catch (error) {
      res.status(500).json({
        succeded: false,
        error,
      });
    }
  };

// eğer bunu koyarsan sayfada json verileri doner
//const getAllPhotos = async (req,res) => {
//     try {
//         const photos = await Photo.find({})
//         res.status(200).json({
//             succeded: true,
//             photos
//         })

//     } catch (error) {
//         res.status(500).json({
//             succeded: false,
//             error,
//         });
//     }
// }

export { createPhoto, getAllPhotos, getAllPhoto };
