const dummyData = [
    { id: 1, name: "inan", templateColor :"#4c92c2", profilePicture : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.technopat.net%2Fsosyal%2Feklenti%2F1622102247623-png.1042967%2F&tbnid=3SXFYy-DKQkfzM&vet=10CAsQxiAoAWoXChMI6JCGy_SJgAMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.technopat.net%2Fsosyal%2Fkonu%2Fen-sevimli-hayvan-hangisidir.1517857%2F&docid=ojFDFvN2wGLTMM&w=373&h=606&itg=1&q=sevimli%20hayvanlar&ved=0CAsQxiAoAWoXChMI6JCGy_SJgAMVAAAAAB0AAAAAEAc" },
    { id: 2, name: "ali" , templateColor :"#b41b88", profilePicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0GC82umjjzGO99JNA4LxBpBc8wHJEPxFyWQAzB_mMkSDq5jQhKu9A0BoDyVVqFr4QYc&usqp=CAU"},
    { id: 3, name: "melike", templateColor :"#f9956f", profilePicture : "https://listelist.com/wp-content/uploads/2016/10/65-605x375.jpg"},
    { id: 4, name: "emre", templateColor :"#715883", profilePicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ49fjAnzIBfv5pwXgt5LrIUoteyrnJ1T3sA&usqp=CAU"},
    { id: 5, name: "elif",templateColor :"#edf822" , profilePicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5Y2bGhkERnJOQjjKZO3hnogldCMJg7mEve83OZ-opuv9Hrb5jxke9kROHus82zgtWWw&usqp=CAU"},
];

export default function handler(req, res) {
    res.status(200).json(dummyData);
}
