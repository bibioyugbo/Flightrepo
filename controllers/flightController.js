exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}

const {Flights} = require("../models/Flight");
const uuid = require("uuid").v4()

//create/book flight
exports.bookflight =async(req, res)=>{
    try{
        const flight = await req.body;
        flight.id = uuid;

       Flights.push(flight);
        res.status(201).json({
            message: "Flight booked",
            flight
        });

    } catch(err){
        res.status(500).json({message:err.message});
    }
}

//get all flight
exports.getFlights = async(req, res)=>{
    try{
        const flights = Flights;
        res.status(200).json({
            message: "All flights",
            flights: flights
        });
        
    } catch(err){
        res.status(500).json({message:err});
    }
}
//get single flight
exports.getFlight= async(req, res)=>{
    try{
        const flight = Flights.find((flight)=> flight.id ===id);
        res.status(200).json({
            message:"Flight found",
            flight,
        });
    }catch(error){}
}
//update flight
exports.updateFlights = async (req, res)=>{
    try{
        let id = req.params.id;
        const flight = Flights.find((flight)=>  flight.id === id);
        const {date}= await req.body;
        flight.date = date; 
        res.status(200).json({
            message: "Flight date updated",
            flight,
        });

    }catch (err){
        res.status(500).json({message:err.message});

    }
}

//delete flight
exports.deleteFlight = async (req, res) => (
    try{
       let id = req.params.id; 
       const flight = Flights.find((flight)=>flight.id === id);
       Flights.splice(Flights.indexOf(flight),1);
       res.status(200).json({
        message: "Flight deleted",
        flight,
       });
    }catch (err) {
        res.status(500).json({message:err.message});

    };
