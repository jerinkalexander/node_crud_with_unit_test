import * as chai from 'chai';

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;
import { updateArrayValueWithoutChangeIndex, deleteArrayValueIfExist } from "../modules/books/books.service.js";

describe('Books Controller', () => {
    describe('updateArrayValueWithoutChangeIndex()', () => {
        it('should return book doesnot exist when passing wrong book name', () => {
            const message = updateArrayValueWithoutChangeIndex([], 'Clean Code', 'The Clean Coder');
            message.should.be.equal('Book Clean Code doesnot exists');
        });
        it('should update book name', () => {
            const message = updateArrayValueWithoutChangeIndex(['Clean Code'], 'Clean Code', 'The Clean Coder');
            message.should.be.equal('Book Clean Code updated with The Clean Coder successfully');
        });
    });


    describe('deleteArrayValueIfExist()', () => {
        it('should delete array value if exist', () => {
            const message = deleteArrayValueIfExist(['Clean Code'], 'Clean Code');
            message.should.be.equal('Book Clean Code deleted successfully');
        });
        it('should throw error message if the array value doesnot exist', () => {
            const message = deleteArrayValueIfExist(['Clean Code'], 'Clean Coder');
            message.should.be.equal('Book Clean Coder doesnot exists');
        });
    });
});