from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.models.worker import Worker
from app.models.db_models import WorkerDB

router = APIRouter(tags=["Workers"])


@router.post("/workers")
def create_worker(
    worker: Worker,
    db: Session = Depends(get_db)
):
    new_worker = WorkerDB(
        name=worker.name,
        age=worker.age,
        location=worker.location,
        skill=worker.skill,
    )

    db.add(new_worker)
    db.commit()
    db.refresh(new_worker)

    return {
        "message": "Worker registered successfully",
        "id": new_worker.id,
    }


@router.get("/workers")
def get_workers(
    db: Session = Depends(get_db)
):
    return db.query(WorkerDB).all()