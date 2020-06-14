import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokemons: any = [];
  constructor(private pokeService: PokeAPIService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }
  getAllPokemons(){
    this.pokeService.getPokemons().subscribe(data =>{
      console.log(data);
      this.pokemons = data;
    });
  }
  showPokemon(id){
    //console.log(id);
    this.router.navigateByUrl(`pokemons/${id}`);
  }

}
