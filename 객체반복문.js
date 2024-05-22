let product = {
    name: 'Microsoft Office 2016',
    price: '15,000,000원',
    language: '한국어',
    supportOS: 'Win 32/64',
    subscription: true,
};
for (let key in product) {
    console.log(key + ' : ' + product[key]);
}
