import catchError from '../../utils/catchError';
import getCarsBrands from './getCarsBrands';
import getCarsModels from './getCarsModels';

export default (router) => {
  // I'm not setting up swagger, because I think that's out of scope of the assessment
  // but this is general idea
  /**
   * @swagger
   * /cars/brands:
   *   get:
   *     tags:
   *       - Car brands
   *     description: List of car brands
   *     consumes:
   *       - application/json
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *        description: A list of car brands
   */
  router.get('/cars/brands', catchError(getCarsBrands));
  router.get('/cars/models', catchError(getCarsModels));
};
