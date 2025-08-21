export const getData = (req, res) => {
  const { username, password } = req.body;
  // res.send(username, password);

  console.log(username, password)
}