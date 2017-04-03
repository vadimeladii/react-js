class Team {

    constructor(jsonObject) {
        this.jsonObject = jsonObject;
        this.jsonToObject(this.jsonObject);
    }

    jsonToObject(jsonObject) {

        this.league = jsonObject.league;
        this.name = jsonObject.caption;
        this.link = jsonObject.link;
        this.url = Team.defaultProps.url + jsonObject.caption;
    }
}

Team.defaultProps = {
    url  : "https://en.wikipedia.org/wiki/"
};

export default Team;