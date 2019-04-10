const GOODS = [
    {
        category: 'furniture',
        name: 'Chair',
        amount: 1,
        price: 20
    },
    {
        category: 'supplies',
        name: 'Gel Pen',
        amount: 20,
        price: 2
    },
    {
        category: 'other',
        name: 'Trash Bin',
        amount: 1,
        price: 5
    },
    {
        category: 'furniture',
        name: 'Sofa',
        amount: 1,
        price: 50
    },
    {
        category: 'supplies',
        name: 'Notebook',
        amount: 3,
        price: 3
    },
    {
        category: 'other',
        name: 'Calendar 2019',
        amount: 1,
        price: 3
    }
];
const SORT_ARROW_UP = '▲';
const SORT_ARROW_DOWN = '▼';
function searchByName(event) {
    let searchRegExp;

    try {
        searchRegExp = new RegExp(event.target.value,'g');
    } catch {
        /*escape spec. symbols*/
        searchRegExp = new RegExp(document.getElementById(inputRegexpId).value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),'g')
    }

    GOODS.forEach((currGood, i) =>{
        if (searchRegExp.test(currGood.name)) {
            GOODS[i].searched = true;
        } else {
            GOODS[i].searched = false;
        }
    });
    viewTable();

}

function filterSelect(event) {
    let filter = event.target.value;
    GOODS.forEach((currGood, i) =>{
        if (currGood.category === filter) {
            GOODS[i].filtered = true;
        } else {
            GOODS[i].filtered = false;
        }
    })
    viewTable();
}

function drawTR(currGood) {


}

function viewTable(){
    let clearTable = () => {
        console.log('clearTable');
    };
    clearTable();
    GOODS.forEach((currGood) =>{
        if (currGood.viewOk) {
            drawTR(currGood);
        }
    })
}

function sortBy(event) {
    console.log(GOODS);
    let field = event.target.innerText.toLowerCase().split(' ');
    event.target.innerText = event.target.innerText.replace((field[1] === SORT_ARROW_UP ? SORT_ARROW_UP : SORT_ARROW_DOWN),
            (field[1] !== SORT_ARROW_UP ? SORT_ARROW_UP : SORT_ARROW_DOWN));


    GOODS.sort((a,b)=>{

        if (a[field[0]] > b[field[0]]) {
            return field[1] !== SORT_ARROW_UP ? 1 : -1;
        }
        return field[1] === SORT_ARROW_UP ? 1 : -1;
    });


    console.log(GOODS);
    viewTable();

}

function eventsLoader() {
    const searchInputElem = document.getElementById('search-by-name');
    searchInputElem.addEventListener('input',(event) => searchByName(event));

    const  filterSelectElem = document.getElementById('filter-by-category');
    filterSelectElem.addEventListener('change',(event) => filterSelect(event))

    const categorySortElem = document.getElementById('category-arrow-sort');
    categorySortElem.addEventListener('click',(event) => sortBy(event));

    const nameSortElem = document.getElementById('name-arrow-sort');
    nameSortElem.addEventListener('click',(event) => sortBy(event));
}