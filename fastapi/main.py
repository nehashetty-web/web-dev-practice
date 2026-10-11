from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello Neha!"}

class User(BaseModel):
    name:str
    age:int

@app.post("/users")
def create_user(user:User):
    return user

@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id}

@app.get("/search")
def search_user(name: str):
    return {"name": name}

