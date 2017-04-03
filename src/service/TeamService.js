import EventEmitter from "events";
import dispatcher from "../Dispatcher";
import axios from 'axios';
import Team from "../models/Team";

class TeamService extends EventEmitter {
    constructor() {
        super();
        this.teams = [];
        this.filteredTeams = [];
    }

    fetchData() {
        axios.get('http://localhost:3001/v1/soccerseasons')
            .then(function(arr) {
            teamService.teams = arr.data.map(function(team) {
                return new Team(team);
            });
        }).then(function() {
            teamService.filteredTeams = Object.assign(teamService.teams);
            teamService.emit("fetched");
        });
    }

    filterData(text) {
        teamService.filteredTeams = Object.assign(teamService.teams.filter((team) => {
           return team.name.toLowerCase().indexOf(text.toLowerCase()) != -1;
        }));


        teamService.emit("filtered");
    }

    getAll() {
        return this.filteredTeams;
    }

    handleActions(action) {
        switch (action.type) {
            case 'FETCH_DATA' :
                this.fetchData();
                break;
            case 'SEARCH_ITEMS' :
                this.filterData(action.text);
                break;
            default :
                break;
        }
    }
}

const teamService = new TeamService();

teamService.defaultProps = {
    url  : "https://en.wikipedia.org/wiki/"
};
dispatcher.register(teamService.handleActions.bind(teamService));
export default teamService;