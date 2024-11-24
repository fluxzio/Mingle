from typing import Callable,Dict, Optional


class DIContainer:
    """ Container that have all dependencies, it will be injected by simply adding it to request param """

    def __init__(self):
        self.__dependencies: Dict[Callable] = {}

    def register(self, name: str, factory: Callable):
        self.__dependencies[name] = factory

    def get(self, name) -> object:
        return self.__dependencies.get(name)()


__all__ = ["DIContainer"]
