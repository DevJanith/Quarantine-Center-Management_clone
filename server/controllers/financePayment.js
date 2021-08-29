import mongoose from 'mongoose';
import FinancePayment from '../models/financePaymentschema.js';


//get all the data
export const getPaymnts = async (req, res) => { 
    try {
        const payments = await FinancePayment.find();  

        res.status(200).json(payments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//create a post
export const createPayment = async(req, res) => {
    const payment = req.body;

    const newPayment = new FinancePayment(payment);

    try {
        await newPayment.save();

        res.status(201).json(newPayment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//update a post
export const updatePayment = async (req, res) => {
    const { id: _id } = req.params;
    const payment = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Payment with that id');
    
    const updatedPayment = await FinancePayment.findByIdAndUpdate(_id, { ...payment, _id}, { new: true });

    res.json(updatedPayment);

}

//delete a post
export const deletePayment = async (req, res) => {
    const { id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Payment with that id: ${id}`);

    await FinancePayment.findByIdAndRemove(id); 

    res.json({ message: "Payment Deleted Successfully." });
} 