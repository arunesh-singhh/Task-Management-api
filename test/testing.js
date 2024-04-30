import request from 'supertest';
import { expect } from 'chai';
import app from '../server.js';

describe('Task Management API', () => {
    it('should create a new task', async() => {
        const res = await request(app)
            .post('/tasks')
            .send({
                title: 'Task 1',
                description: 'Description of Task 1',
                status: 'pending'
            });
        const taskId = res.body._id;
        const getRes = await request(app).get(`/tasks/${taskId}`);
        expect(res.statusCode).equal(201);
        expect(getRes.body).to.have.nested.property('_id');


    });

    it('should retrieve all tasks', async() => {
        const res = await request(app).get('/tasks');
        expect(res.statusCode).equal(200);
        expect(Array.isArray(res.body)).to.be.true;
    });

    it('should retrieve a single task by its ID', async() => {
        // Create a new task
        const createRes = await request(app)
            .post('/tasks')
            .send({
                title: 'Task 2',
                description: 'Description of Task 2',
                status: 'completed'
            });
        const taskId = createRes.body._id;

        // Retrieve the task by its ID
        const getRes = await request(app).get(`/tasks/${taskId}`);
        expect(getRes.statusCode).equal(200);
        expect(getRes.body).to.have.property('_id').that.deep.equal(taskId);
    });

    it('should update a task by its ID', async() => {
        // Create a new task
        const createRes = await request(app)
            .post('/tasks')
            .send({
                title: 'Task 3',
                description: 'Description of Task 3',
                status: 'pending'
            });
        const taskId = createRes.body._id;

        // Update the task by its ID
        const updatedData = {
            title: 'Updated Task 3 Title',
            description: 'Description of Task 3',
            status: 'pending'
        };
        const updateRes = await request(app)
            .patch(`/tasks/${taskId}`)
            .send(updatedData);
        expect(updateRes.statusCode).equal(200);
        expect(updateRes.body).to.have.property('_id').that.deep.equal(taskId);
        expect(updateRes.body.title).equal(updatedData.title);
    });

    it('should delete a task by its ID', async() => {
        // Create a new task
        const createRes = await request(app)
            .post('/tasks')
            .send({
                title: 'Task 4',
                description: 'Description of Task 4',
                status: 'in progress'
            });
        const taskId = createRes.body._id;

        // Delete the task by its ID
        const deleteRes = await request(app).delete(`/tasks/${taskId}`);
        expect(deleteRes.statusCode).equal(200);
        expect(deleteRes.body).to.have.property('_id').that.deep.equal(taskId);
    });
});