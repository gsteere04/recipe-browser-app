from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, schemas, models, database

router = APIRouter(
    prefix="/recipes",
    tags=["recipes"],
)

@router.post("/", response_model=schemas.Recipe)
def create_recipe(recipe: schemas.RecipeCreate, db: Session = Depends(database.get_db), user_id: int = 1):
    return crud.create_recipe(db=db, recipe=recipe, user_id=user_id)

@router.get("/", response_model=List[schemas.Recipe])
def read_recipes(skip: int = 0, limit: int = 10, db: Session = Depends(database.get_db)):
    recipes = crud.get_recipes(db, skip=skip, limit=limit)
    return recipes

