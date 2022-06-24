$(document).ready(function() {
    $('.fa-magnifying-glass').click(function() {
        $('#modal').fadeIn();
    });
    $('.fa-xmark').click(function() {
        $('#modal').fadeOut();
    });
    $('#modal').click(function() {
        $('#modal').fadeOut();
    })
    $('.modal-search').click(function(event) {
        event.stopPropagation();
    });
});

var linkNews = 'https://gnews.io/api/v4/top-headlines?token=b1ff28e7239ecac2d94efea937064405&lang=en';
var listNew = document.querySelector('.list-new');
var searchButton = document.querySelector('.search-button');
var modal = document.querySelector('#modal');
function start() {
    getNews(function(news) {
        renderNews(news);
    });
};
start();

function getNews(callback) {
    fetch(linkNews)
        .then(function (rs) {
        return rs.json();
        })
        .then(callback);
};
    
function renderNews(news) {
    var cacBai = news.articles;
    var htmls = cacBai.map(function(baiDang) {
        return `
        <li class="list-new-item row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"><img src="${baiDang.image}"></div>
            <div class="list-new-item-right col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <a href="${baiDang.url}" target="_blank"><b>${baiDang.title}</b></a>
                <h6><i>${baiDang.publishedAt}</i></h6>
                <p>${baiDang.description}</p>
            </div>
        </li>
        `;
    });
    listNew.innerHTML = htmls;
};
    
searchButton.addEventListener('click', function() {
    var getTextInput = document.querySelector('.modal-function-content').value;
    var searchApi = `https://gnews.io/api/v4/search?q=${getTextInput}&token=b1ff28e7239ecac2d94efea937064405&lang=en`;
    fetch(searchApi)
            .then(function (rs) {
                return rs.json();
            })
            .then(function(data) {
                renderSearchApi(data);
            });

    function renderSearchApi(data) {
        var cacBaiTimKiem = data.articles;
        var ketqua = cacBaiTimKiem.map(function(topBai) {
            return `
            <li class="list-new-item row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"><img src="${topBai.image}"></div>
                <div class="list-new-item-right col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <a href="${topBai.url}"><b>${topBai.title}</b></a>
                    <h6><i>${topBai.publishedAt}</i></h6>
                    <p>${topBai.description}</p>
                </div>
            </li>
            `;
        });
        listNew.innerHTML = ketqua;
    };
    modal.style.display = 'none';
});


