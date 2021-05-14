importPackage(Packages.arc.audio);

let filter = new Filters.BassBoostFilter();
filter.set(100);

void function boost(o){
    Object.keys(o).forEach(e => {
        try{
            o[e].setFilter(filter);
        }catch(c){}
    });
    return boost;
}(Musics)(Sounds);
