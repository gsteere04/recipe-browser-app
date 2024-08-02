from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..database import SessionLocal
from .. import models, schemas

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/recipes/{recipe_id}/comments/", response_model = schemas.Comment)
def create_comment_for_recipe(recipe_id: int, comment: schemas.CommentCreate, db: Session = Depends(get_db)):
    db_recipe = db.query(models.Recipe).filter(models.Recipe.id == recipe_id).first()
    if db_recipe is None:
        raise HTTPException(status_code=404, detail="Recipe is not found")
    db_comment = models.Comment(**comment.dict(), recipe_id=recipe_id)
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment

@router.get("/recipes/{recipe_id}/comments/", response_model = List[schemas.Comment])
def read_comments_for_recipe(recipe_id: int, db: Session = Depends(get_db)):
    comments = db.query(models.Comment).filter(models.Comment.recipe_id == recipe_id).all()
    return comments