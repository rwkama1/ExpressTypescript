/*
 * GET users listing.
 */
import { Fabrica } from "testingpatternss/PatronesTypescript/FabricaData";
import express = require('express');
const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    let getproducts = await Fabrica.getData().getProducts();
    res.send(getproducts);
});

export default router;