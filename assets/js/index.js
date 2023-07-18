let $form = document.querySelector("#form");
let $list = document.querySelector('#list')
let pizza = document.querySelectorAll('.inputlar')
let add = document.querySelectorAll('.achchiq_hayot')
let userArray = []
$form.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let { user_name, user_phone, user_email, meatA, size, } = evt.target.elements
    let pizza_arr = [];
    let price_arr1 = [];
    let paper_arr = [];
    let paper_arr1 = [];
    let size_arr = [];
    let size_arr1 = [];
    let thin_arr = [];
    let thin_arr1 = [];

    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].checked) {
            pizza_arr.push(pizza[i].value)
            price_arr1.push(Number(pizza[i].dataset.price))
        }
    }

    for (let i = 0; i < add.length; i++) {
        if (add[i].checked) {
            paper_arr.push(add[i].value)
            paper_arr1.push(Number(add[i].dataset.price))
        }
    }
    for (let i = 0; i < size.length; i++) {
        if (size[i].checked) {
            size_arr.push(size[i].value)
            size_arr1.push(Number(size[i].dataset.price))
        }
    }
    for (let i = 0; i < meatA.length; i++) {
        if (meatA[i].selected) {
            thin_arr.push(meatA[i].value)
            thin_arr1.push(Number(meatA[i].dataset.price))
        }
    }

    let dollor1 = price_arr1.map(a => b+=a, b=0).reverse()[0],
    dollor2 =  paper_arr1.map(a => b+=a, b=0).reverse()[0],
    dollor3 = size_arr1.map(a => b+=a, b=0).reverse()[0],
    dollor4 = thin_arr1.map(a => b+=a, b=0).reverse()[0],
    dollor =  dollor1 + dollor2 + dollor3 + dollor4;


    let array = [];
    for (i = 0; i < add.length; i++) {
        if (add[i].checked) {
            array.push(add[i].value)
        }
    }


    let newObj = {
        id: userArray.length + 1,
        name: user_name.value.trim(),
        phone: user_phone.value.trim(),
        email: user_email.value.trim(),
        meat: meatA.value.trim(),
        size: size.value.trim(),
        on: pizza_arr.join(', '),
        added: array.join(', '),
        total_pizza: price_arr1.map(a => b+=a, b=0).reverse()[0],
        add_pizza: paper_arr1.map(a => b+=a, b=0).reverse()[0],
        size_pizza: size_arr1.map(a => b+=a, b=0).reverse()[0],
        thickness_pizza: thin_arr1.map(a => b+=a, b=0).reverse()[0],
        total:dollor
    }
    userArray.push(newObj)
    console.log(userArray);
    renderFunction(userArray, $list)

})

var renderFunction = (array, element) => {
    element.innerHTML = null
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `
            <li class="li-1">
            <p class="sale-menu"> User id: ${array[i].id}</p>
            <p class="sale-menu-p1">Name: ${array[i].name}</p>
            <p class="sale-menu-p1">Phone: ${array[i].phone}</p>
            <p class="sale-menu-p1">Email: ${array[i].email}</p>
            </li>
            <li class="li-2">
            <p class="sale-menu-p1">Meat: ${array[i].meat}</p>
            <p class="sale-menu-p1">Size: ${array[i].size}</p>
            <p class="sale-menu-p1">Pizza: ${array[i].on}</p>
            <p class="sale-menu-p1">Added: ${array[i].added}</p>
            <p class="sale-menu-p1">Thickness-Pizza: ${array[i].thickness_pizza}$</p>
            <p class="sale-menu-p1">Size-Pizza: ${array[i].size_pizza}$</p>
            <p class="sale-menu-p1">on-Pizza: ${array[i].total_pizza}$</p>
            <p class="sale-menu-p1">Add-Pizza: ${array[i].add_pizza}$</p>
            <p class="sale-menu-p1">Total: ${array[i].total}$</p>

            </li>
        `
    }
}

renderFunction(userArray, $list)



















































function makeItRain() {
    let drops = '';
    let increment = 0;


    while (increment < 98) {
        increment += 1;
        let delay = Math.floor(Math.random() * (190 - 1 + 1) + 1);
        drops += '<div class="drop" style="left:' + increment + '%; animation-delay:0.' + delay + 's; animation-duration:0.8' + delay + 's;"><div class="stem" style="left:' + increment + '%;animation-delay:0.' + delay + 's; animation-duration:0.8' + delay + 's;"></div><div class="splash" style="left:' + increment + '%;animation-delay:0.' + delay + 's; animation-duration:0.8' + delay + 's;">    </div></div>'
    }
    document.getElementById('rain-container').innerHTML += drops;
    document.getElementById('Audio').innerHTML += drops;
}

makeItRain()


