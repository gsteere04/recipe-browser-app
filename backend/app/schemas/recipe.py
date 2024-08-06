from pydantic import BaseModel 
from typing import List
from .comment import Comment
class RecipeBase(BaseModel):
    title: str
    description: str

class RecipeCreateI(RecipeBase):
    pass

class Recipe(RecipeBase):
    id: int
    comments: List["Comment"] = []

    class Config:
        orm_mode = True