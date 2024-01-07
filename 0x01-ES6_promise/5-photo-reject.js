export default function uploadPhoto(fileName) {
  return new Promise((resolver, reject) => {
    reject(new Error(`${fileName} cannot be proccessed`));
  });
}
