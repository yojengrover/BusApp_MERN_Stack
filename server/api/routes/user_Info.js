const Info = require('../../models/userinfo')

module.exports = function(router) {



    router.get('/userinfo', function(req, res) {

        Info.find({}, (err, info) => {
            if (err) {
                res.json({ success: false, message: err });
            } else {


                if (!info) {
                    res.json({ success: false, message: 'no info found' });
                } else {

                    res.json({ success: false, message: info });
                }
            }

        })
    })

    router.post('/logingin',(req, res)=> {
        Info.findOne({ email: req.body.email}, (err, user) =>{
          if(err) {
              res.status(404).json({ success: false,message: 'user not found'})
          }
          else {
              if(user)
              {
               if(user.password===req.body.password){
                  res.status(200).json({ success: true, message: 'Correct user' })

               }
              else{
                  res.status(404).json({ success: false, message: 'invalid password'})
              }
            }
            else{
                res.status(404).json({ success: false,message: 'invalid user not found'})
            }
          }
        })
    })

    


    router.post('/userinfo', function(req, res) {
        let note = new Info(req.body)
        note.save(function(err, note) {
            if (err) {
                return res.status(400).json(err)

            }
            res.status(200).json(note)

        })
    })

    router.put('/updateUserInfo', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'no info provided' });
        } else {

            Info.findOne({ _id: req.body._id }, (err, info) => {
                if (err) {
                    res.json({ success: false, message: 'User info not found' })
                } else {
                    info.BusType = req.body.BusType;
                    info.Departure = req.body.Departure;
                    info.Arrival = req.body.Arrival;

                    info.SeatsAvailable = req.body.SeatsAvailable;
                    info.From = req.body.From;
                    info.To = req.body.To;
                    info.save((err) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        } else {
                            res.json({ success: true, message: 'User Info updated!' });
                        }

                    });
                }
            });
        }

    })




    router.delete('/deleteBusInfo/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'no bus id provided' });
        } else {

            Info.findOne({ _id: req.params.id }, (err, info) => {
                if (err) {
                    res.json({ success: false, message: 'invalid id' })
                } else {

                    info.remove((err) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        } else {
                            res.json({ success: true, message: 'Bus info deleted!' });
                        }

                    });
                }
            });
        }

    })



    }