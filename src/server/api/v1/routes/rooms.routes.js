/*
Import the internal libraries:
- PostController
*/
import { RoomsController } from '../controller';

// Create instance of roomsController otherwise you can't use it
const roomsController = new RoomsController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/posts:
     *   get:
     *     tags:
     *       - Posts
     *     description: Returns all posts
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of posts
     */
    parentRouter.get('/rooms', roomsController.index);
    /**
     * @swagger
     * /api/v1/posts/create:
     *   get:
     *     tags:
     *       - Post
     *     description: Returns specific viewmodel such as categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create post
     */
    parentRouter.get('/rooms/create/', roomsController.create);
    /**
     * @swagger
     * /api/v1/posts/{id}:
     *   get:
     *     tags:
     *       - Post
     *     description: Returns specific post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Post id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get post by id
     */
    parentRouter.get('/rooms/:id', roomsController.show);
    /**
     * @swagger
     * /api/v1/posts:
     *   post:
     *     tags:
     *       - Post
     *     description: Save post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: post
     *         description: Post object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved post
     */
    parentRouter.post('/rooms', roomsController.store);
    /**
     * @swagger
     * /api/v1/posts/{id}/edit:
     *   get:
     *     tags:
     *       - Post
     *     description: Returns specific viewmodel such as post, categories
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Post id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit post by id
     */
    parentRouter.get('/rooms/:id/edit', roomsController.edit);
    /**
     * @swagger
     * /api/v1/posts/{id}:
     *   put:
     *     tags:
     *       - Post
     *     description: Update specific post detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Post id
     *         in: path
     *         required: true
     *         type: string
     *       - name: post object
     *         description: post data
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Update post
     */
    parentRouter.put('/rooms/:id', roomsController.update);
    /**
     * @swagger
     * /api/v1/posts/{id}:
     *   delete:
     *     tags:
     *       - Post
     *     description: Delete specific post detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Post id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete post
     */
    parentRouter.delete('/rooms/:id', roomsController.destroy);
};

export default initializeEndpoints;
