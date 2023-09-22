/* eslint-disable quotes */
const movies = require("./__mock__/countMovies.js");
const comments = require("./__mock__/countComment.js");

// Test suite
describe('movies function', () => {
  // Test case 1: Testing an empty array
  test('should return 0 for an empty array', () => {
    const arr = [];
    const result = movies(arr);
    expect(result).toBe(0);
  });

  // Test case 2: Testing an array with one element
  test('should return 1 for an array with one element', () => {
    const arr = ['Movie 1'];
    const result = movies(arr);
    expect(result).toBe(1);
  });

  // Test case 3: Testing an array with multiple elements
  test('should return the number of elements in the array', () => {
    const arr = ['Movie 1', 'Movie 2', 'Movie 3'];
    const result = movies(arr);
    expect(result).toBe(arr.length);
  });
});

// Count comments

// Test suite
describe('comments function', () => {
  // Test case 1: Testing an empty comment list
  test('should return 0 for an empty comment list', () => {
    const commentList = [];
    const result = comments(commentList);
    expect(result).toBe(0);
  });

  // Test case 2: Testing a comment list with one comment
  test('should return 1 for a comment list with one comment', () => {
    const commentList = ['This is a comment'];
    const result = comments(commentList);
    expect(result).toBe(1);
  });

  // Test case 3: Testing a comment list with multiple comments
  test('should return the number of comments in the list', () => {
    const commentList = ['Comment 1', 'Comment 2', 'Comment 3'];
    const result = comments(commentList);
    expect(result).toBe(commentList.length);
  });
});