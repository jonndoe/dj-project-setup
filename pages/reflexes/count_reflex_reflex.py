from sockpuppet.reflex import Reflex


class CountReflexReflex(Reflex):
    def increment(self, step=1):
        self.count = int(self.element.dataset["count"]) + step
