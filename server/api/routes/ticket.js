const tickets = require('../../models/ticket');

module.exports=function(router){
    
    router.post('/tickets',(req,res)=>{
        let ticket = new tickets(req.body);
        ticket.save((err,ticket)=>{
            if(err){
                return res.status(400).json(err);
            }
            res.status(200).json(ticket);
        })
    })
    

    router.post('/ticket/:id',(req,res)=>{
        tickets.findOne({_id:req.params.id},async (err,ticket)=>{
            if(err){
                res.json({status:false,message:err})
            }else{
                if(ticket){
                    try{
                        res.json({status:true,message:ticket})
                        
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





}



