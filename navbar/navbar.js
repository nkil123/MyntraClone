function navbar () {
  return `<div id="header">
    <!-- <header> -->

    <div class="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS357fHYAnvyZIqrnolaRs3MlCQO7PyKngEag&usqp=CAU"
            alt="" />
    </div>

    <div class="nav">
        <a href="">MEN
            <div>

            </div>
        </a>
        <a href="">WOMEN</a>
        <a href="">KIDS</a>
        <a href="">HOME & LIVIVNG</a>
        <a href="">BEAUTY</a>
    </div>

    <div class="search">
        <a href="#"><span class="material-icons">search</span></a>
        <input type="text" placeholder="search" />
    </div>

    <div class="right">
        <div class="talign">
            <span class="material-icons">person</span><br />
            <span>Profile</span>
        </div>
        <div class="talign">
            <span class="material-icons">favorite_border</span><br />
            <span>Wishlist</span>
        </div>
        <div class="talign">
            <span class="material-icons">shopping_bag</span><br />
            <span>Bag</span>
        </div>
    </div>

    <!-- </header> -->
</div>`;
}

export {navbar};
