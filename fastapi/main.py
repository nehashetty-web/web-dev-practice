
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


# HOME API
@app.get("/")
def home():
    return {"message": "Hello Neha!"}


# USER MODEL
class User(BaseModel):
    name: str
    age: int


# USER APIs
@app.post("/users")
def create_user(user: User):
    return user


@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id}


@app.get("/search")
def search_user(name: str):
    return {"name": name}


@app.put("/users/{user_id}")
def update_user(user_id: int):
    return {"message": f"User {user_id} updated"}


