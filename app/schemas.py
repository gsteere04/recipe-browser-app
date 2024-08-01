from pydantic import BaseModel
from typing import List, Optional

class RecipeBase(BaseModel):
    title: str
    description: Optional[str] = None

class RecipeCreate(RecipeBase):
    pass

class Recipe(RecipeBase):
    id: int
    user_id: int

    class Config:
        orm_mode=True

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    recipes: List[Recipe] = []

    class Config:
        orm_mode=True
