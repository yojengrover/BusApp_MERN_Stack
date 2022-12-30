const Info = require('../../models/info')

module.exports = function(router) {



    router.get('/info', function(req, res) {

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

    router.post('/info', function(req, res) {
        let note = new Info(req.body)
        note.save(function(err, note) {
            if (err) {
                return res.status(400).json(err)

            }
            res.status(200).json(note)

        })
    })
    router.post('/findbus',(req,res)=>{
        Info.find(  {from: req.body.from,to: req.body.to} ,{},(err,busdata)=>{
            if(err) 
            throw err;
            if(busdata.length===0)
            res.json({success:false})
            else
            res.status(200).json({status:true,bus:busdata})
        })
    })

    router.put('/updateInfo', (req, res) => {
        if (!req.body._id) {
            res.json({ success: false, message: 'no info provided' });
        } else {

            Info.findOne({ _id: req.body._id }, (err, info) => {
                if (err) {
                    res.json({ success: false, message: 'not a valid bus info id' })
                } else {
                    info.BusType = req.body.BusType;
                    info.Departure = req.body.Departure;
                    info.Arrival = req.body.Arrival;

                    info.SeatsAvailable = req.body.SeatsAvailable;
                    info.from = req.body.from;
                    info.to = req.body.to;
                    info.save((err) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        } else {
                            res.json({ success: true, message: 'Bus Info updated!' });
                        }

                    });
                }
            });
        }

    })

    router.get('/findseat/:id',(req,res)=>{
        Info.findOne({_id:req.params.id},async (err,bus)=>{
            if(err){
                res.json({status:false,message:err})
            }else{
                if(bus){
                    try{
                        res.json({status:true,message:bus})
                        
                    }
                    catch(err){
                        console.log(err)
                    }
                  }    
                else{
                        res.json({status:false,message:"seats not found"})
                    }
                }
            })
})

     

    router.put('/updateseat/:id',(req,res)=>{
      
        Info.findOne({_id:req.params.id}, (err, bus)=>{
            if(err){
                res.json({success:false, message:'Invalid id'})
            } else{
                    bus.bookedSeats= req.body.bookedSeats;
                    bus.save((err)=>{
                        if(err){
                            res.json({success:false, message:err})
                        }else{
                            res.json({success:true, message: bus})
                        }
                    })
                }
            })
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