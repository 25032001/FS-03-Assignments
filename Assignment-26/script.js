let library = [ 
    { author: 'JK Rowling', title: 'The Christmas Pig', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Amitav Ghosh', title: 'The Living Mountain: A Fable for Our Times', libraryID: 3245},
    { author: 'Lory donza', title: 'The begning', libraryID: 1251},
    { author: 'stephen', title: 'Life a ahead', libraryID: 4260},
    { author: 'Jhumpa Lahiri', title: 'Whereabouts', libraryID: 3240},
    { author: 'sambo', title: 'Psychopath', libraryID: 1247},
    { author: 'hoosli', title: 'Dreams', libraryID: 4260},
    { author: 'simby', title: 'Worst world', libraryID: 3244}
 ];
 
 library.map(obj => {
    let title = obj.title;
    let author = obj.author;
    console.log({title, author})
 })
 