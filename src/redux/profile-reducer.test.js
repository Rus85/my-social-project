import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = { posts: [
    { id: 1, message: 'Holla', likesCount: 50 },
    { id: 2, message: 'Hello', likesCount: 200 },
]}


it('new post should be added', () => {
    let action = addPostActionCreator('add new post')
    
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
    
  });

  it('new post should be added', () => {
    let action = addPostActionCreator('reducer test')
    
    let newState = profileReducer(state, action)

    
    expect(newState.posts[2].message).toBe('reducer test')
  });
  
  // Тест без готовой логики
  
  it('summ of posts shoul be 1', () => {
    let action = deletePost(1)
    
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)

  });
  
  it('if post id is incorrect dont delete', () => {
    let action = deletePost(10)
    
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)

  });

