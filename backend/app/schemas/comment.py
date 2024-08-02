from pydantic import BaseModel

class CommentBase(BaseModel):
    text: str

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    id: int
    recipe_id: int

    class Config:
        orm_mode = True

